import{MultiChatSocket, MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('db1065a7-0fb5-4b62-a29d-f012cc704c87',props.user.username,props.user.secret)
    return  <div style={{ height: "100vh"}}>
        <MultiChatSocket{...chatProps}/>
        <MultiChatWindow{...chatProps} style={{height: '100%'}}/>
    </div>
}
export default ChatsPage;