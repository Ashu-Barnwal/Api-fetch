const Content = ({inputList, content, cat}) => {
    // console.log(users);
    return (
        <main>
            {inputList && <ul>
                {
                    content.map(item => {
                        return <li key={item.id}>{JSON.stringify(item)}</li>
                    })
                }
                </ul>}

            {!inputList && cat==='users' && <table>
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                    </tr>

                    {content.map((item) => (
                        <tr key={JSON.stringify(item.id)}>
                            <td>{JSON.stringify(item.id)}</td>
                            <td>{JSON.stringify(item.name)}</td>
                            <td>{JSON.stringify(item.username)}</td>
                            <td>{JSON.stringify(item.email)}</td>
                            <td>{JSON.stringify(item.address)}</td>
                            <td>{JSON.stringify(item.phone)}</td>
                            <td>{JSON.stringify(item.website)}</td>
                            <td>{JSON.stringify(item.company)}</td>
                        </tr>
                            ))} 
                </tbody>
            </table>}

            {!inputList && cat==='posts'&& <table>
                <tbody>
                    <tr>
                        <th>UserId</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                    {content.map((item) => (
                        <tr key={JSON.stringify(item.id)}>
                            <td>{JSON.stringify(item.userId)}</td>
                            <td>{JSON.stringify(item.id)}</td>
                            <td>{JSON.stringify(item.title)}</td>
                            <td>{JSON.stringify(item.body)}</td>
                        </tr>
                            ))} 
                </tbody>
            </table> }

            {!inputList && cat==='comments' && <table>
                <tbody>
                    <tr>
                        <th>PostId</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                    </tr>
                    {content.map((item) => (
                        <tr key={JSON.stringify(item.id)}>
                            <td>{JSON.stringify(item.postId)}</td>
                            <td>{JSON.stringify(item.id)}</td>
                            <td>{JSON.stringify(item.name)}</td>
                            <td>{JSON.stringify(item.email)}</td>
                            <td>{JSON.stringify(item.body)}</td>
                        </tr>
                            ))} 
                </tbody>
            </table> }
        </main>
    )
}

export default Content
