import React from "react";
import useFirestore from "../hooks/useFireStore";
import { motion } from "framer-motion";

function ImageGrid({ setSelectedImage }) {
  const { docs } = useFirestore("images");
  console.log(docs);
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => {
          return (
            <motion.div
              className="img-wrap"
              key={doc.id}
              onClick={() => setSelectedImage(doc.url)}
              whileHover={{ opacity: 1 }}
              layout
            >
              <motion.img
                src={doc.url}
                alt="uploadedpic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                trasnition={{ delay: 1 }}
              />
            </motion.div>
          );
        })}
    </div>
  );
}

export default ImageGrid;
