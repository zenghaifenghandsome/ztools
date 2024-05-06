import { useEffect } from "react";
import { Outlet, useNavigate} from "react-router-dom";
const Home = () => {
    const nav = useNavigate();
    useEffect(()=>{
        console.log("aaaaaaa")
    },[])
    return(
        <div className="content-home">
            <div className="content-home-menu">
                <li className="content-home-menu-list">首页</li>
                <li className="content-home-menu-list">全部关注</li>
                <li className="content-home-menu-list">最新微博</li>
                <li className="content-home-menu-list">特别关注</li>
                <li className="content-home-menu-list">好友圈</li>
                <li className="content-home-menu-list">自定义分组</li>
                <li className="content-home-menu-list">同学</li>
                <li className="content-home-menu-list">名人明星</li>
                <li className="content-home-menu-list">同事</li>
                <li className="content-home-menu-list">悄悄关注</li>
            </div>
            <div><Outlet /></div>
        </div>
    )
}
export default Home;