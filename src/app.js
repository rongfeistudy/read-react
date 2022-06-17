const React = require('react');
const { Component, useState } = React;
function DemoFunc() {
    const [data, setData] = useState(1);
    setTimeout(() => {
        setData(3);
    }, 3000)
    return <dl>
        <dt>{data}</dt>
        <dd>hello, world</dd>
    </dl>
}
class Demo extends Component {
    render () {
        return (
            <div>
                <DemoFunc />
            </div>
        )
    }
}
export default Demo
