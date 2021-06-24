
import Date from './date';

export default function PageHeading({ title, date }) {
    return (
        <header className="py-md-5 border-bottom">
            <div className="container text-center py-5">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 text-center">
                        {/* <!-- Headin --> */}
                        <h1 className="display-2">{title}</h1>
                        {/* <!-- Text --> */}
                        <p className="lead text-muted mb-7 mb-md-9">
                        {date ? (<Date dateString={date} />) : (
                            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum rem porro, nobis cum voluptatum quo dicta minus eveniet.'
                        )}
                        </p>
                    </div>
                </div>
                {/* <!-- / .row --> */}
            </div>
            {/* <!-- / .container --> */}
        </header>
    )
}
