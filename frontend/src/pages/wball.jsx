import { Button, Card, Input } from "@arco-design/web-react";
import {GetUsers} from "../../wailsjs/go/main/App"
const wball = () => {
    const submit = () => {
        GetUsers("zeng").then(req => {
            console.log(req)
        })
    }
    return(
        <div>
            <div>
                <Card>
                    <Input.TextArea placeholder="有什么新鲜事想分享给大家？"/>
                    <div className="wb-home-input-foot">
                        <div>
                            <span>表情</span>
                        </div>
                        <div>
                            <span>图片</span>
                        </div>
                        <div>
                            <span>视频</span>
                        </div>
                        <div>
                            <span>话题</span>
                        </div>
                        <div>
                            <span>头条文章</span>
                        </div>
                        <div>
                            <span>更多</span>
                        </div>
                        <Button type="primary" onClick={submit}>发布</Button>
                    </div>
                </Card>
                <Card >
                    <div className="wb-home-input-foot">
                        <span>全部</span>
                        <span>原创</span>
                        <span>视频</span>
                        <span>超话社区</span>
                        <span>V+微博</span>
                        <span>群微博</span>
                    </div>
                </Card>
            </div>
            <div></div>
        </div>
    )
}
export default wball;