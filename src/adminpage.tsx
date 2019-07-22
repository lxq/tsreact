import * as React from "react";

// 属性函数组件
const AdminPage: React.SFC = () => {
    return (
        <div className="page-container">
            <h1>管理员面板</h1>
            <p>登录后才可以看到此面板。</p>
        </div>
    );
};

export default AdminPage;
