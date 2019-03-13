import React from "react";
import Photo from "./Photo";
import apiKey from "./Config";
import axios from "axios";

//apiKey variable
const api = apiKey;

export default class Animal extends React.Component {
    constructor() {
        super();
        this.state = {
            photos: []
        }
    }

    //axios used for fetching like i saw in the workshop
    componentDidMount = () => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&tags=${this.props.searchFor}&per_page=24&format=json&nojsoncallback=1`)
        .then(res => {
            this.setState({ photo: res.data.photos.photo})
        })
        // catch error function was copied from previouscatch error function
        .catch(function(error){
            console.log("Error fetching data from flickr", error);
        })
 }

 //return statement
 render() {
    return (
      <div className="photo-container">
        <h2>{this.props.name} Photos</h2>
        <ul>
          {
            this.state.photos.map(image => {
              return (
                <Photo url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={image.id} />
              )
            })
          }
        </ul>
      </div>
    )
  }
}