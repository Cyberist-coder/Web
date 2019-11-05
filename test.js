// 网页加载完成之后才会执行window.onload 对应的函数
window.onload = function () {
    function getdate() {
        showtime = document.getElementById("time")
        var date = new Date()
        year = date.getFullYear()
        month = date.getMonth() + 1
        day = date.getDate()
        hour = date.getHours()
        minute = date.getMinutes()
        second = date.getSeconds()
        showtime.innerHTML = year + "/" + month + "/" + day + "--" + hour + ":" + minute + ":" + second
    }

    // getDay 是获取当天的星期
    setInterval(getdate, 1000)

    var pos_1 = 0;
    var pos_2 = 0;
    var pos_3 = 150;
    var pos_4 = 150;
    item = document.getElementById("box")

    function move() {

        if (pos_1 >= 150) { // 控制向右移动
            pos_2 += 10;
            if (pos_2 > 150) { // 控制向下
                pos_3 -= 10;
                // box.style.backgroundColor = 'green';
                if (pos_3 >= 0) // 控制向左移动
                    box.style.left = pos_3 + 'px';
                else {
                    pos_4 -= 10;
                    if (pos_4 >= 0) {
                        // box.style.backgroundColor = 'orange';
                        box.style.top = pos_4 + 'px';
                    } else {
                        pos_1 = pos_2 = 0;
                        pos_3 = pos_4 = 150;
                    }

                }
            } else {
                // box.style.backgroundColor = 'blue';
                box.style.top = pos_2 + 'px';
            }

        } else {
            pos_1 += 10;
            // box.style.backgroundColor = 'red';
            box.style.left = pos_1 + 'px';
        }
    }

    setInterval(move, 100)

    var color = 0
    function change_color(){
        item.style.backgroundColor = '#'+ color;
        color += 1 ;
    }
    setInterval(change_color,1)
    
    var angle = 0;
    function rotation(){
        box = document.getElementById('box');
        box.style.transform = 'rotate(' + angle%360 + 'deg)';
        angle += 10;
        
    }
    
    setInterval(rotation, 1);
}

