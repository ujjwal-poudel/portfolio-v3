import introductionItems from './introduction.js';

function Introduction() {
    return (
        <div>
            {introductionItems.map((item, index) => (
                <div key={index}>
                    <div>
                        {/* Heading and job title */}
                        <h1>{item.name}</h1>
                        <h2>{item.title}</h2>

                        <div>
                            {/* Picture */}
                            <img src={item.image} alt={item.name} />
                        </div>
                    </div>

                    <div>
                        {/* About me description */}
                        <p>{item.description}</p>
                    </div>
                    
                    <div>
                        {/* Social links */}
                        {item.socialLinks.map((link, linkIndex) => (
                            <div key={linkIndex}><a href={link.url}>{link.name}</a></div>
                        ))}
                    </div>

                    <div>
                        {/* Main links */}
                        {item.mainLinks.map((link, linkIndex) => (
                            <div key={linkIndex}><a href={link.url}>{link.name}</a></div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Introduction;