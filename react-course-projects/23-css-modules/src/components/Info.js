import './Info.css' //если так будем импортироватб то css правила будут применяться глобально

import styles from './Info.module.css'

console.log(styles)
// {
//      info: "Info_info__ujGH-"
//      myOtherButton: "Info_myOtherButton__O5d9O"
// }


// с помощью css module мы сможем локализовать css файлы и главное изолировать чтобы не глобализировалось или не перемешалось  
// и дать классам уникальные названия, и поэтому эти правила css не будут выполняться для других файлов

// CSS модуль — это CSS файл, в котором все имена классов и анимаций имеют локальную область видимости по умолчанию.
function Info(){
    return (
        <div className={styles.info}>
            <h1>Hello from the hell</h1>
            <button>Click me</button>
            <button className={styles.myOtherButton}>Click me</button>
        </div>
    )
}
export default Info