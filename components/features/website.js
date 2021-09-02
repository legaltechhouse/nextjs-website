
export default function Website({ title, description}) {
    return (
        <article className="p-3">
            <div className="mx-auto mb-5 mb-lg-0 mb-lg-3">

                <h2 className="h5 fw-bolder">
                    {title}
                </h2>
                <p className="text-mutedd">{description}</p>
            </div>
        </article>
    );
}