import LtImage from "../image";

export default function Website({ title, description, image}) {
    return (
        <article className="p-3">
            <div className="mx-auto mb-5 mb-lg-0 mb-lg-3">
            <LtImage picture={image} />

                <h2 className="h5 fw-bolder">
                    {title}
                </h2>
                <p className="text-mutedd">{description}</p>
            </div>
        </article>
    );
}