export default [
    {
        name: "Price List", key: "priceList", path: '/price', icon: 'TagOutlined'
    },
    // {
    //     name: "Attendance", key: "attendance", path: '/attendance', icon: 'BarcodeOutlined',
    //     children: [
    //         {
    //             name: "Client", key: "clientAttendance", path: '/attendance/client', icon: 'TeamOutlined'
    //         }, {
    //             name: "Staff", key: "staffAttendance", path: '/attendance/staff', icon: 'UserOutlined'
    //         },{
    //             name: "History", key: "attendanceHistory", path: '/attendance/history', icon: 'HistoryOutlined'
    //         },
    //     ]
    // },
    {
        name: "Member", key: "member", path: '/member', icon: 'TeamOutlined',
        children: [
            {
                name: "New", key: "newMember", path: '/member/new', icon: 'PlusCircleOutlined'
            }, {
                name: "List", key: "listMember", path: '/member/', icon: 'SearchOutlined'
            },{
                name: "Audit", key: "auditMember", path: '/member/audit', icon: 'SearchOutlined'
            },
        ]
    },
    // {
    //     name: "Payment", key: "payment", path: '/payment', icon: 'DollarCircleOutlined'
    // }, {
    //     name: "Stock", key: "stock", path: '/stock', icon: 'DropboxOutlined'
    // }, {
    //     name: "Expenditure", key: "expenditure", path: '/expenditure', icon: 'MoneyCollectOutlined'
    // }, {
    //     name: "Message", key: "message", path: '/message', icon: 'MailOutlined'
    // }, {
    //     name: "Report", key: "report", path: '/report', icon: 'SnippetsOutlined'
    // }, {
    //     name: "Log", key: "log", path: '/log', icon: 'BookOutlined'
    // }, {
    //     name: "Setting", key: "setting", path: '/setting', icon: 'SettingOutlined'
    // },
]