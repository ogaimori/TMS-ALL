const styles: string[] = ["Джаз","Блюз"]
styles.push("Рок-н-ролл")
styles[Math.floor(styles.length-1/2)] = "Классика"
styles.shift()
styles.unshift("Реп","Регги")
styles.reverse()
console.log(styles.indexOf("Реп"))
console.log(styles)
