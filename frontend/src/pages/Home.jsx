import {Link} from 'react-router-dom';

var style_var = {
    backgroundImage: "url('https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000000964/a28a81253e919298beab2295e39a56b7a5140ef15abdb56135655e5c221b2a3a')",
    height: "100vh",
    width: "100vw",
    margin: "0",
    padding: "0",
    marginTop: "70px",
    marginBottom: "70px",
    marginLeft: "0px",
    fontSize: "12px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}

function Home(){
    return (
    <div style={style_var}>
        <div>
            <h1>gfokgdfslkgklfçdlçgksf~dkl~çgfdsgklç~sfdklç</h1>  
            <Link to="npcgen">Npc Generator</Link>
        </div>
    </div>
    )
}

export default Home;