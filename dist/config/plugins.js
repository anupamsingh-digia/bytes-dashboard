module.exports = ({ env }) => ({
    "netlify-deployments": {
        enabled: true,
        config: {
            accessToken: "SL-RzYeWC8f5tLuzSIXfKQOdHbO4NveyodYDAEXDaR8",
            sites: [
                {
                    name: 'digi-bytes',
                    id: "a108f7d1-80ca-47d6-b161-0eec8ad4ed76",
                    buildHook: "https://api.netlify.com/build_hooks/6451016ec292a95527170a69",
                    branch: 'master' // optional
                }
            ]
        },
    },
});
