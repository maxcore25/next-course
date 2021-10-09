import A from './A'
import Head from "next/head";

export const MainContainer = ({children, keywords}) => {
    return (
        <>
            <Head>
                <meta keywords={"max, next.js, react.js" + keywords}/>
                <title>Home Page</title>
            </Head>
            <div className="nav">
                <A href="/" text="Home"/>
                <A href="/users" text="Users"/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                    .nav{
                    background: orange;
                    padding: 15px;
                    display: flex;
                    justify-content: space-evenly;
                    }
                `}
            </style>
        </>
    )
}
