let _main = document.getElementsByClassName('main')[0]
let _100vw = _main.clientWidth
// console.log(_100vw);
let bright = document.getElementsByClassName('bright')[0]
let dark = document.getElementsByClassName('dark')[0]
let _100vh = bright.clientHeight/13
// console.log(_100vh);
let menu = document.querySelectorAll('.menu')
let toggle = document.querySelectorAll('.toggle')
// console.log(toggle);
let iconToggle = document.querySelectorAll('.toggle i')
let i = 1;
toggle.forEach(function(val){
    val.addEventListener('click', function(){
        if(i%2){
            menu.forEach(function(val){
              val.style.clipPath = 'circle(150% at 50% 0%)'  
            })
            iconToggle.forEach(function(val){
                val.classList.remove('bi-x-diamond')
                val.classList.add('bi-x-diamond-fill')
            });
        }
        else{
            menu.forEach(function(val){
                val.style.clipPath = 'circle(70px at 50% 0%)'
            })
            iconToggle.forEach(function(val){
                val.classList.add('bi-x-diamond')
                val.classList.remove('bi-x-diamond-fill')
            });
        }
        i++
    })
})

let wArtIntro = []
let hArtIntro = []
let tArtIntro = []
let artIntro = document.querySelectorAll('.artIntro')
artIntro.forEach(function(val, i){
    wArtIntro[i] = val.computedStyleMap().get('width').value
    hArtIntro[i] = val.computedStyleMap().get('height').value
    tArtIntro[i] = val.computedStyleMap().get('top').value
})

let _name = document.querySelectorAll('.name')
let tName = document.querySelectorAll('.artIntro')
_name.forEach(function(val, i){
    tName[i] = val.computedStyleMap().get('top').value
})
let helloName = document.querySelectorAll('.helloName')
let rHelloName = []
let tHelloName = []
helloName.forEach(function(val, i){
    rHelloName[i] = val.computedStyleMap().get('right').value
    tHelloName[i] = val.computedStyleMap().get('top').value
})
let artHelloName = document.querySelectorAll('.helloName strong')
let vasilPic = document.querySelectorAll('.vasilPic')
let tVasilPic = []
vasilPic.forEach(function(val, i){
    tVasilPic[i] = val.computedStyleMap().get('top').value
})
let inviteName = document.querySelectorAll('.inviteName')
let tInviteName = []
inviteName.forEach(function(val, i){
    tInviteName[i] = val.computedStyleMap().get('top').value
})

let gallery3d = document.querySelectorAll('.gallery3d')
let pGallery3d = document.querySelectorAll('.gallery3d p')
let tpGallery3d = []
pGallery3d.forEach(function(val, i){
    tpGallery3d[i] = val.computedStyleMap().get('top').value
})

let arrowBox = document.querySelectorAll('.arrowBox')
let explore  = document.querySelectorAll('.explore')
let tExplore = []
explore.forEach(function(val, i){
    tExplore[i] = val.computedStyleMap().get('top').value
})
// console.log(tExplore); 

let exploreBtn = document.querySelectorAll('.explore a')

window.addEventListener('scroll', ()=>{
    let temp = window.scrollY
    // console.log(temp);
    artIntro.forEach(function(val, i){
        val.style.width = (wArtIntro[i] + temp*1.2) + 'px'
        val.style.height = (hArtIntro[i] + temp) + 'px'
        val.style.top = (tArtIntro[i] + temp/2) + 'px'
        val.style.position = 'relative'
    })
    if(temp>220){
        artIntro.forEach(function(val, i){
            val.style.width = _100vw + 'px'
            val.style.position = 'fixed'
            val.style.height = _100vh + 'px'
            val.style.top =  '0px'
        })
        if(temp > 245){
            _name.forEach(function(val, i){
                val.style.top = (tName[i] - temp/2) + 'px'
            })
            if(temp > 700){
                helloName.forEach(function(val , i){
                    val.style.right = rHelloName[i] + ((temp/_100vw)*100) + '%' 
                })
                _name.forEach(function(val, i){
                    val.style.position = 'fixed'
                    val.style.top = '0px'
                })
                vasilPic.forEach(function(val, i){
                    val.style.top = tVasilPic[i] - temp/3 + 'px'
                })
                if(temp > 3550){
                    helloName.forEach(function(val, i){
                        val.style.position = 'fixed'
                        val.style.right =  '37%'
                    })
                    if(temp > 4300){
                        helloName.forEach(function(val, i){
                            val.style.opacity = '0';
                            val.style.transition = '1s';
                        })
                        if(temp > 5000){
                            inviteName.forEach(function(val, i){
                                val.style.opacity = '1';
                                val.style.transition = '1s';
                                val.style.top = tInviteName[i]*1.5 + 'px';
                            })
                            if(temp > 5200){
                                pGallery3d.forEach(function(val, i){
                                    val.style.top = tpGallery3d[i] + temp/5.5 + 'px'
                                })
                                if(temp > 6300){
                                    inviteName.forEach(function(val, i){
                                        val.style.opacity = '0';
                                        val.style.transition = '0s';
                                    })
                                    if(temp > 6600){
                                        arrowBox.forEach(function(val, i){
                                            val.style.opacity = '1'
                                        })
                                        if(temp > 7785){
                                            explore.forEach(function(val, i){
                                                val.style.position = 'fixed'
                                                val.style.top = '0px'
                                            })
                                        }
                                        else{
                                            explore.forEach(function(val, i){
                                                val.style.position = 'relative'
                                                val.style.top = tExplore[i] + 'px'
                                            })
                                        }
                                    }
                                    else{
                                        arrowBox.forEach(function(val, i){
                                            val.style.opacity = '0'
                                        })
                                    }
                                }
                                else{
                                    inviteName.forEach(function(val, i){
                                        val.style.opacity = '1';
                                        val.style.transition = '1s';
                                    })
                                }
                            }
                            else{
                                pGallery3d.forEach(function(val, i){
                                    val.style.top = tpGallery3d[i] + 'px'
                                })
                            }
                        }
                        else{
                            inviteName.forEach(function(val, i){
                                val.style.opacity = '0';
                                val.style.transition = '0s';
                                val.style.top = tInviteName[i] + 'px';  
                            })
                        }
                    }
                    else{
                        helloName.forEach(function(val, i){
                            val.style.opacity = '1';
                            val.style.transition = '0s';
                        })
                    }
                }
                else{
                    helloName.forEach(function(val, i){
                        val.style.position = 'absolute'
                        val.style.right = rHelloName[i] + ((temp/_100vw)*100) + '%' 
                    })
                }
            }
            else{
                helloName.forEach(function(val, i){
                    val.style.right = rHelloName[i] + '%' 
                })
                vasilPic.forEach(function(val, i){
                    val.style.top = tVasilPic[i] + 'px'
                })
                _name.forEach(function(val, i){
                    val.style.position = 'absolute'
                    val.style.top = (1.5*_100vh - temp/2) + 'px'
                }) 
            }
        }
        else{
            _name.forEach(function(val, i){
                val.style.top = (1.5*_100vh) + 'px'
            }) 
        }
    }
})

_main.addEventListener('mousemove', ()=>{
    _main.addEventListener('mousemove', darkMove)
    _main.removeEventListener('wheel', darkMove)
})
_main.addEventListener('wheel', ()=>{
    _main.addEventListener('wheel', darkMove)
    _main.removeEventListener('mousemove', darkMove)
})

let x = 0
let y = 0
let x2 = 0
let y2 = 0
function darkMove(e){
    x = e.clientX
    y = e.clientY
    exploreBtn.forEach(function(val, i){
        val.style.top = y + 'px'
        val.style.left = x + 'px'
    })
    x2 = e.pageX
    y2 = e.pageY
    dark.style.transition = '.3s'
    dark.style.clipPath = 'circle(130px at '+x2+'px '+y2+'px)'
}