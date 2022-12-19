export default () => {
    const wait = async (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const onLoading = async () => {
        // console.log(results)
        try {
            setLoader(true);
            wait(1000).then(() => {
                setLoader(false)
            })

        }
        catch (err) {
            console.log(err, 'omar')
        }
    }
}


