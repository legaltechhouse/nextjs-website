
import Date from './date';

export default function PageHeading({ title, date, caption }) {
    const placeholder = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum rem porro, nobis cum voluptatum quo dicta minus eveniet.'
                       
    return (
        <header className="py-md-5 border-bottom bg-primary">
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 text-center text-white">
                        {/* <!-- Headin --> */}
                        <h1 className="display-6">{title}</h1>
                        {/* <!-- Text --> */}
                        <p className="mb-7 mb-md-9">
                        {date ? (<Date dateString={date} />) : (caption ? caption : placeholder)}
                        </p>
                    </div>
                </div>
                {/* <!-- / .row --> */}
            </div>
            {/* <!-- / .container --> */}
        </header>
    )
}
