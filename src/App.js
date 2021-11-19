import { useState } from 'react';
import './App.css';
import './components/Wishlist.css';
import './components/Navbar.css';
import './components/Overview.css';

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [overview, setOverview] = useState([]);
  const [page, setPage] = useState('movies')

  const [movies] = useState (
    [
      {
        name: 'Yowes Ben 1',
        genre: 'Comedy , Drama ',
        image: 'https://m.media-amazon.com/images/M/MV5BMjcwYzU5ZGQtY2I5NC00M2YyLTllZDktZTEzNjdiMWVkMjRkXkEyXkFqcGdeQXVyNzkzODk2Mzc@._V1_.jpg',
        overview: "Bayu (Bayu Skak) menyukai Susan (Cut Meyriska) sejak lama. Namun karena dia merasa minder dengan keadaan dirinya yang pas-pasan, Bayu memutuskan memendam perasaan itu. Namun hari-hari Bayu berubah sejak Susan mengirim voice chat ke ponsel Bayu, yang membuatnya kegeeran luar biasa mengira Susan memberi isyarat agar didekati. Ternyata Susan hanya memanfaatkan Bayu untuk membantunya mensuplai pecel untuk konsumsi teman-teman OSIS. Bayu bertekad mengubah dirinya menjadi lebih populer dari Roy (Indra Widjaya), pacar Susan, yang dikenal piawai sebagai gitaris band sekolah mereka, Bayu berinisiatif membentuk band bersama Doni (Joshua Suherman) - sahabat dekatnya, Yayan (Tutus Thomson) - seorang tukang tabuh beduk sebagai drummer dan Nando (Brandon Salim) - siswa ganteng yang jago keyboard. Mereka sepakat menamakan band mereka YOWIS BEN. Namun rupanya langkah Bayu dan teman-temannya tidak mudah. Dalam masa-masa YOWIS BEN tumbuh di dunia musik kota Malang, perlahan tapi pasti celah perpecahan antar personil YOWIS BEN mulai tampak Berhasilkah Bayu mempertahankan band-nya dan mendapatkan Susan?"
      },
      {
        name: 'Yowes Ben 2',
        genre: 'Comedy , Drama ',
        image: 'https://cdn.medcom.id/images/library/images/49711685_1132269503600744_3192736271703215749_n.jpg',
        overview: 'Usai diputus Susan (Cut Meyriska), Bayu (Bayu Skak) dihadapkan pada naiknya harga kontrakan yang membuat dia, ibunya dan Cak Jon (Arief Didu) terancam diusir. Untungnya Yowis Ben populer di Malang dan jadi satu-satunya harapan Bayu menyelesaikan persoalan keuangan. Celakanya masing-masing personil menyimpan masalah. Yayan (Tutus Thomson) menikah dengan Mia (Anggika Bölsterli); krisis keluarga Nando (Brandon Salim) karena ayahnya memutuskan menikah lagi; dan Doni (Joshua Suherman) berambisi punya pacar. Bayu memecat Cak Jon, lalu mempercayakan Yowis Ben kepada Cak Jim (Timo Scheunemann), yang mengklaim dirinya sudah membesarkan banyak artis nasional. Mereka pun hijrah ke Bandung. Tapi, kredibilitas Cak Jim mencurigakan dan Bayu juga harus meluluhkan hati bapak super galak karena dia jatuh cinta dengan Asih (Anya Geraldine), putrinya.'
      },
      {
        name: 'Yowes Ben 3',
        genre: 'Comedy , Drama',
        image: 'https://assets.promediateknologi.com/crop/0x0:0x0/x/photo/2021/09/30/3319419958.jpg',
        overview: "Di tengah ketenarannya sebagai grup musik, Yowis Ben, terancam kehilangan salah satu personilnya dan juga manajer yang selama ini mendampingi mereka.."
      },
      {
        name: 'Cinta Brontosaurus',
        genre: 'Comedy , Drama',
        image: 'https://m.media-amazon.com/images/M/MV5BZmQyMGY0MmEtOTkzOS00ZjRjLTlkNjYtZWJiOGEwMjM1ZWRhXkEyXkFqcGdeQXVyNjU3MzA0NjE@._V1_.jpg',
        overview: "Dika (Raditya Dika) adalah seorang penulis yang baru saja putus cinta dengan Nina (Pamela Bowie), pacarnya setelah sekian lama. Semenjak putus cinta ini, dia percaya bahwa cinta bisa kedaluwarsa. Kosasih (Soleh Solihun), agen naskah Dika, mencoba untuk membuat Dika yakin terhadap cinta kembali, seperti Kosasih yakin dengan istrinyanya Wanda (Tyas Mirasih). Usaha ini, membawa Dika ke dalam serangkaian perkenalan absurd. Namun, cinta bisa datang tanpa persiapan. Seperti saat Dika bertemu dengan Jessica (Eriska Rein), seorang perempuan yang jalan pikirannya sama anehnya dengan Dika. Semakin Dika kenal dengan Jessica, semakin dia bertanya: apa benar cinta bisa kedaluwarsa? Di sisi yang lain, Mr. Soe Lim (Ronny P. Tjandra), menawarkan untuk memfilmkan buku Dika, yang berjudul Cinta Brontosaurus. Tertarik, Dika berusaha untuk menulis skrip film tersebut. Masalah mulai timbul ketika di tengah jalan, Mr. Soe Lim mencoba untuk mengubah naskah asli Dika menjadi film horror yang sedang laku. Film ini adalah perjalanan Dika untuk memahami cinta, yang justru dia dapatkan dari pengalamannya bersama Jessica, teman, dan keluarganya sendiri."
      },
    ]);

    const addToWishlist = (movie) => {
      setWishlist([...wishlist, {...movie}]);
    };

    const removeFromWL = (movieToRemove) => {
      setWishlist(
        wishlist.filter((movie) => movie !== movieToRemove)
      );
    };

    const toOverviewHandler = (movie) => {
      setOverview([...overview, {...movie}]);
      setPage('overview');
    };

    const fromOverviewHandler = (overviewToRemove) => {
      setOverview(
        overview.filter((movie) => movie !== overviewToRemove)
        );
      navigateTo('movies');
    };

    const navigateTo = (nextPage) => {
      setPage(nextPage);
    };

    const renderMovies = () => (
      <>
              <div className = "Navbar">
                  <ul>
                      <li>
                        <h4>WARUNGFILM</h4>
                      </li>
                      <li>
                        <a onClick={() => navigateTo('movies')} className = "ActivedHome">Home</a>
                      </li>
                      <li>
                        <a onClick={() => navigateTo('wishlist')} className="WLButton">Wishlist ({wishlist.length})</a>
                      </li>
                  </ul>
              </div>
              <div className="Cards">
              {movies.map((movie, idx) => (
                <div className = "Card" key={idx}>
                  <img onClick={() => toOverviewHandler(movie)} className="MoviePoster" src = {movie.image}width="360px" height="360px"></img>
                  <div className = "Container">
                    <h5>{movie.name}</h5>
                    <h5>{movie.genre}</h5>
                    <div onClick={() => addToWishlist(movie)} className="Button">
                    <p>Add to Wishlist</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              </>
    );

    const renderOverview = () => (
      <>
      <div className = "Navbar">
        <ul>
            <li>
                <h4>WARUNGFILM</h4>
            </li>
        </ul>
      </div>
      <div className = "OverviewHeader" >
          <h5>Overview</h5>
          </div>
      <div className="OverviewContent">
          <div className = "Overview">
            {overview.map((movie, idx) => (
            <div className = "OverviewContainer">
              <img className = "OverviewPoster" src = {movie.image} width="360px" height="500px"></img>
              <div className = "MovieOverview">
                <p>{movie.overview}</p>
              </div>
              <h5 className="BackButton" onClick={() => fromOverviewHandler(movie)}>Back</h5>
            </div>
          ))}
          </div>
      </div>
      
      </>
    )

    const renderWishlist = () => (
      <>
      <div className = "Navbar">
                  <ul>
                      <li>
                        <h4>WARUNGFILM</h4>
                      </li>
                      <li>
                        <a onClick={() => navigateTo('movies')} className = "Home">Home</a>
                      </li>
                      <li>
                        <a onClick={() => navigateTo('wishlist')} className="ActivedWL">Wishlist ({wishlist.length})</a>
                      </li>
                  </ul>
      </div>
      <div className = "Wishlist">
        <div className = 'WishlistContent'>
          <div className = "WishlistHeader">
            <h5>Wishlist</h5>
          </div>
          <div className = "WishlistBody">
            <div className = "WishlistCards">
              {wishlist.map((movie, idx) => (
                <div className = "WishlistCard">
                  <div className = "Details">
                    <img src = {movie.image}></img>
                    <h5>{movie.name}</h5>
                  </div>
                  <div className = "RemoveButton">
                    <h5 onClick={() => removeFromWL(movie)}>Remove</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </>
    );

  return (
    <div className="App">
            {page === 'movies' && renderMovies()}
            {page === 'overview' && renderOverview()} 
            {page === 'wishlist' && renderWishlist()}
    </div>
  );
}
export default App;
