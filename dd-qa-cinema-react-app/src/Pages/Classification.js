function Classification(){
    return(
        <>
        <div>
          <h2 style={{
             "fontFamily": "sans-serif",
             "fontWeight": "600"
          }}>Age Policy</h2>
          </div>
          <div style={{
            "textAlign": "center",
            "maxWidth": "1200px",
            "fontFamily": "sans-serif"
          }}>
            <h3 style={{
                "fontFamily": "sans-serif"
            }}>Proof of Age</h3>
            <p>For all discounted tickets and entry to age-restricted films, proof of entitlement or age will be required.</p>

             <img src={require("../Pages/images/U.png")} alt="Universal" />
             <p>It is impossible to predict what might upset any particular child. But a 'U' film should be suitable for audiences aged four years and over. 'U' films should be set within a positive moral framework and should offer reassuring counterbalances to any violence, threat or horror.</p>

             <img src={require("../Pages/images/PG.png")} alt="parental" />
             <p>Unaccompanied children of any age may watch. A 'PG' film should not disturb a child aged around eight or older. However, parents are advised to consider whether the content may upset younger or more sensitive children.</p>

             <img src={require("../Pages/images/12A.png")} alt="Twelve" />
             <p>No-one younger than 12 may see a '12A' film in a cinema unless accompanied by an adult. Responsibility for allowing under-12s to view lies with the accompanying or supervising adult.</p>

             <img src={require("../Pages/images/15.png")} alt="fifteen" />
             <p>No-one younger than 15 may see a '15' film in a cinema.</p>

             <img src={require("../Pages/images/18.png")} alt="eighteen" />
             <p>No-one younger than 18 may see an '18' film in a cinema.</p>

             <img src={require("../Pages/images/TBC.png")} alt="confirmed" />
             <p>To be confirmed - in some instances films have not yet been certified.</p>
            
          </div>
        </>
    );
}

export default Classification;