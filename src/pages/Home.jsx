export default function Home() {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header" 
        style={{
                backgroundSize: "cover",
                minHeight: "50vh",
                display: "flex",
                alignItems: "center",
                position: "relative",
                overflow: "hidden"
              }}>
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown"
                  style={{
                    textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
                    fontWeight: "700",
                    letterSpacing: "1px"
                  }}>
                Discover the Heart of Paradise
              </h1>
              <p className="fs-4 text-white mb-4 animated slideInDown"
                 style={{
                   textShadow: "1px 1px 4px rgba(0,0,0,0.3)",
                   maxWidth: "700px",
                   margin: "0 auto",
                   lineHeight: "1.6"
                 }}>
                Plan your perfect trip with local insights, authentic experiences, and unforgettable memories
              </p>
              <div className="position-relative w-75 mx-auto animated slideInDown"
                   style={{
                     maxWidth: "800px",
                     transition: "all 0.5s ease"
                   }}>
                <input
                  className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Eg: Sigiriya"
                  style={{
                    boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
                    fontSize: "1.1rem",
                    height: "60px"
                  }}
                />
                <button
                  type="button"
                  className="btn btn-light rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                  style={{ 
                    marginTop: "8px",
                    fontWeight: "600",
                    background: "white",
                    color: "#0062ff",
                    boxShadow: "0 3px 15px rgba(0,0,0,0.2)",
                    transition: "all 0.3s ease",
                    border: "none"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "#f8f9fa";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "white";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  Find Your Next Adventure
                </button>
              </div>
              
              {/* Additional decorative elements */}
              <div className="mt-5 animated fadeInUp" style={{ animationDelay: "0.5s" }}>
                <div className="d-flex justify-content-center gap-4">
                  {['Beaches', 'Culture', 'Adventure', 'Wildlife', 'Food'].map((item, index) => (
                    <span key={index} 
                          className="badge rounded-pill px-3 py-2"
                          style={{
                            background: "rgba(255,255,255,0.2)",
                            backdropFilter: "blur(5px)",
                            border: "1px solid rgba(255,255,255,0.3)",
                            fontSize: "0.9rem",
                            fontWeight: "500",
                            transition: "all 0.3s ease"
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = "rgba(255,255,255,0.3)";
                            e.target.style.transform = "translateY(-3px)";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = "rgba(255,255,255,0.2)";
                            e.target.style.transform = "translateY(0)";
                          }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave decoration at bottom */}
        <div className="wave wave-bottom" style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
          overflow: "hidden",
          lineHeight: "0"
        }}>
          <svg 
            style={{
              position: "relative",
              display: "block",
              width: "calc(100% + 1.3px)",
              height: "100px"
            }} 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              className="shape-fill" 
              style={{
                fill: "#ffffff",
                opacity: "0.2"
              }}
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}