
import './App.css';
import Accordian from './Component/Accordian';
import HexRgb from './Component/HexRgbColor';
import StarRating from './Component/StarRating';
import ImageSlider from './Component/Image-Slider';
import LoadMoreData from './Component/LoadMoreData';
import TreeView from './Component/TreeView';
import menusData from './Component/TreeView/data.js';
import QRCode from './Component/QRCode'; 
import LightDarkMode from './Component/LightDarkMode';
import Custom_Scroll_Indicator from './Component/CustomScrollIndicator';
import DynamicTabs from './Component/DynamicTab'
import resultData from './Component/DynamicTab/data.js'
import TabParent from './Component/DynamicTab/tabparent.jsx';
import ModalParent from './Component/CustomModalPopup/modalparent.jsx';
import GitHubProfileFinder from './Component/GitHubProfileFinder'
import Autocomplete from './Component/Autocomplete'
import TicTakToe from './Component/TikTakToe/index.jsx';

function App() { 

  return (
    <div className="App">
      <br /><br />
      {/* Component: Acordian */}
      {/* <Accordian /> */}
      {/* <HexRgb /> */}
      {/* <StarRating starNum={10} /> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'} /> */} 
      {/* <LoadMoreData limit={'8'} skip={'8'} stopat={'24'} /> */}  
      {/* <TreeView menu={menusData} /> */} 
      {/* <QRCode /> */}
      {/* <LightDarkMode /> */}
      {/* <Custom_Scroll_Indicator url={'https://dummyjson.com/products?limit=100'} /> */}
      {/* ****Prgram By Own**** */}
      {/* <DynamicTabs resource={resultData} /> */}
      {/* <TabParent />       */}
      {/* <ModalParent /> */}
      {/* <GitHubProfileFinder /> */}
      {/* <Autocomplete /> */}
      <TicTakToe />




      
    </div>
  );
}

export default App;
