import LtImage from "../image";

export default function Admin({ title, description, image, pos }) {
    const order = pos % 2 === 0 ? 1 : 0;
    const reverseOrder = ++order ? 1 : 0; 

    return (
        <>
        <div className={`col-lg-7 order-lg-${order}`}>
            <LtImage picture={image} />
        </div>
            <div className={`col-lg-4 order-lg-${reverseOrder}`}>
                <div className="mx-auto mb-5 mb-lg-0 mb-lg-3">
                    <h2 className="h2 fw-bolder">
                        {title}
                    </h2>
                    <p className="text-muted">{description}</p>
                </div>
            </div>
        </>
    );
}