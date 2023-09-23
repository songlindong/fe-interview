let microContainer = null

export async function bootstrap() {
    console.log('应用正在启动')
}
export async function mount() {
    console.log('应用正在挂载')
    microContainer = document.createElement('div')
    microContainer.id = 'microContainer'
    microContainer.innerHTML = 'Hello World666'
    document.body.appendChild(microContainer)
}
export async function unmount() {
    console.log('应用正在卸载')
    document.body.removeChild(microContainer)
}