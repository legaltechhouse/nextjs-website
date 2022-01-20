
import Date from './date';

export default function PageHeading({ title, date, caption }) {
    const placeholder = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum rem porro, nobis cum voluptatum quo dicta minus eveniet.'
                       
    return (
        <header className="py-3 py-md-4 border-top border-transparent bg-secondary">
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 pb-7 pb-md-9 text-center text-white">
                        {/* <!-- Headin --> */}
                        <h1 className="display-6 m-0">{title}</h1>
                        {/* <!-- Text --> */}
                        <p className="m-0">
                        {date ? (<Date dateString={date} />) : (caption ? caption : '')}
                        </p>
                    </div>
                </div>
                {/* <!-- / .row --> */}
            </div>
            {/* <!-- / .container --> */}
        </header>
    )
}
