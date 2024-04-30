import {Input,Avatar} from "@arco-design/web-react";
import {IconUser} from "@arco-design/web-react/icon";
const Header = () => {
    return(
        <div className="header-body">
            <div></div>
            <div>
                <Input style={{width:300}} placeholder='Please Enter Code'/>     
            </div>
            <div className="header-right">
                <Avatar>
                    <IconUser />
                </Avatar>
            </div>
        </div>
    )
}
export default Header;