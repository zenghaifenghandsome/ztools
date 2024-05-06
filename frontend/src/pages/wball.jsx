import { Button, Card, Input } from "@arco-design/web-react";

const wball = () => {
    return(
        <div>
            <div>
                <Card>
                    <Input.TextArea />
                    <div>
                        <Button type="primary">发布</Button>
                    </div>
                </Card>
                <Card>
                    <span>全部</span>
                    <span>原创</span>
                    <span>视频</span>
                    <span>超话社区</span>
                    <span>V+微博</span>
                    <span>群微博</span>
                </Card>
            </div>
            <div></div>
        </div>
    )
}
export default wball;