import LtImage from "../image";

export default function Website({ title, description, image}) {
    return (
        <article className="p-lg-5">
            <LtImage picture={image}/>
            <div className="mx-auto mb-5 mb-lg-0 mb-lg-3">

                <h2 className="h5 fw-bolder">
                    {title}
                </h2>
                <p>{description}</p>
            </div>
        </article>
    );
}