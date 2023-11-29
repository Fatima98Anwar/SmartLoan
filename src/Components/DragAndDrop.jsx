import React from "react";
import { useState } from "react";
export const DragAndDrop = () => {
  const [drag, setDrag] = useState(null);

  return (
    <>
    {!files &&{
        <div className="dropzone">
        </div>
    }
    }
    </>
  );
};

export default DragAndDrop;
