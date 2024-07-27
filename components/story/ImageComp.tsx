'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

const ImageComp = ({ imageUrl, file, handleSave }: any) => {
    const [CurrentimageUrl, setCurrentImageUrl] = useState(imageUrl)
    console.log('CurrentimageUrl',CurrentimageUrl);
    
    useEffect(() => {
        // if (file) {
        //     const reader = new FileReader();
        //     reader.readAsDataURL(file);
        //     reader.onload = () => {
        //         setCurrentImageUrl(reader.result as string);
        //     };
        // }
        // return () => {

        // };
    }, [imageUrl]);

    return (
        <div>
            <Image
                src={CurrentimageUrl}
                alt="Picture of the author"
                width={1000}
                height={1000}
                className="w-full h-full object-cover object-center"
            />
            <div className=" text-center text-sm max-w-md mx-auto">
                <p data-p-placeholder="Type caption"></p>
            </div>
            <p data-p-placeholder="..."></p>



        </div>
    )
}

export default ImageComp