export const ProjectsListSkeleton = () => {
    return (
        <div className="skeleton-project-index-wrapper">
            <div style={{margin: '40px 0 20px', width: '150px'}}>
                <div style={{margin: '10px 0'}} className="skeleton-line"></div>
            </div>
            <div className="skeleton-project-index">
                <div className="skeleton-project-index-item" style={{margin: '20px 0'}}>
                    <div style={{width: '100%', height: '180px'}} className="skeleton-block">
                    </div>
                    <div style={{margin: '20px 10px'}}>
                        <div style={{margin: '10px 0'}} className="skeleton-line"></div>
                        <div style={{margin: '10px 0'}} className="skeleton-line"></div>
                        <div style={{margin: '10px 0'}} className="skeleton-line"></div>
                    </div>
                </div>

                <div className="skeleton-project-index-item" style={{margin: '20px 0'}}>
                    <div style={{width: '100%', height: '180px'}} className="skeleton-block">
                    </div>
                    <div style={{margin: '20px 10px'}}>
                        <div style={{margin: '10px 0'}} className="skeleton-line"></div>
                        <div style={{margin: '10px 0'}} className="skeleton-line"></div>
                        <div style={{margin: '10px 0'}} className="skeleton-line"></div>
                    </div>
                </div>

                <div className="skeleton-project-index-item" style={{margin: '20px 0'}}>
                    <div style={{width: '100%', height: '180px'}} className="skeleton-block">
                    </div>
                    <div style={{margin: '20px 10px'}}>
                        <div style={{margin: '10px 0'}} className="skeleton-line"></div>
                        <div style={{margin: '10px 0'}} className="skeleton-line"></div>
                        <div style={{margin: '10px 0'}} className="skeleton-line"></div>
                    </div>
                </div>
            </div>
        </div>

    )
}