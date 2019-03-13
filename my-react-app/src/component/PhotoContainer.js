import React from "react";
import Photo from "./Photo";

const photoContainer = (props) => {
    return(
        <div className="photo-container">
        {
          props.gallery.length === 0 ?
            <div className="photo-container">
              <h2>Search Result</h2>
              <h3>Sorry no photos were found !</h3>
            </div>
            :
            <div>
              <h2>Search Result</h2>
              <ul>
                {
                  props.gallery.map(image => {
                    return (
                      <Photo url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} key={image.id} />
                    )
                  })
                }
              </ul>
            </div>
        }
      </div>
    )
}

export default photoContainer;