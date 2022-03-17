export const handleFirstResponse = async response => {
    if (!response.ok) {
        const { error = 'Unknown error occured.' } = await response.json()
        throw new Error(error)
    }
    return response.json()

}