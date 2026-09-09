import "./SectionHeader.css";


function SectionHeader({

    eyebrow,

    title,

    description,

    align = "left"

}) {

    return (

        <div
            className={`section-header section-header--${align}`}
        >

            {eyebrow && (

                <span className="section-header__eyebrow">

                    <span></span>

                    {eyebrow}

                </span>

            )}


            <h2>
                {title}
            </h2>


            {description && (

                <p>
                    {description}
                </p>

            )}

        </div>

    );

}


export default SectionHeader;