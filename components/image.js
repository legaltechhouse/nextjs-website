import Image from 'next/image'

function LtImage({picture}) {
    if (!picture.length) return 'no image';
    return <img src={`/images/${picture}`} alt="placeholder" className="img-fluid mb-4"/>
  //return <Image src={picture} alt="image" width="200" height="200"/>
}

export default LtImage;