// Load application styles
import 'styles/index.scss'
import 'images/oscar_Landstrom_meta_picture.png'
import 'images/favicon.ico'
import * as basicScroll from 'basicscroll'
const bezier = 'cubicInOut'

const middlePatternPanel = basicScroll.create({
    elem: document.querySelector('.middlePatternPanel'),
    from: 'top-bottom',
    to: 'bottom-top',
    direct: true,
    props: {
        '--MiddlePaternPanelPositionY': {
            from: '9vh',
            to: '-40vh',
            timing: 'linear'
        }
    }
})
middlePatternPanel.start()

const experiencesHeader = basicScroll.create({
    elem: document.querySelector('.experiences-header'),
    from: 'middle-bottom',
    to: 'top-middle',
    direct: true,
    props: {
        '--ExperiencesHeaderOpacity': {
            from: 0,
            to: 1,
            timing: bezier
        },
        '--ExperienceHeaderPositionY': {
            from: '-8vh',
            to: '0',
            timing: bezier
        }
    }
})
experiencesHeader.start()

let experiences = []
document.querySelectorAll('.experience').forEach((elem, i) => {
    experiences.push(basicScroll.create({
        elem: elem,
        from: 'middle-bottom',
        to: 'top-middle',
        direct: true,
        props: {
            '--ExperiencePositionY': {
                from: '-8vh',
                to: '0',
                timing: bezier
            },
            '--ExperienceOpacity': {
                from: 0,
                to: 1,
                timing: bezier
            },
            '--ExperienceDotScale': {
                from: 0,
                to: 1,
                timing: bezier
            },
            '--ExperienceBorderWidth': {
                from: '0%',
                to: '100%',
                timing: bezier
            }
        }
    }))
})
experiences.forEach((experience) => experience.start())

const footerPatternPanel = basicScroll.create({
    elem: document.querySelector('.footerPatternPanel'),
    from: 'middle-bottom',
    to: 'top-middle',
    direct: true,
    props: {
        '--FooterPaternPanelPositionY': {
            from: '0vh',
            to: '-35vh',
            timing: 'linear'
        }
    }
})
footerPatternPanel.start()

const techniquesHeader = basicScroll.create({
    elem: document.querySelector('.techniques-header'),
    from: 'middle-bottom',
    to: 'top-middle',
    props: {
        '--TechniquesHeaderOpacity': {
            from: 0,
            to: 1,
            timing: bezier
        },
        '--TechniquesHeaderPositionY': {
            from: '-8vh',
            to: '0',
            timing: bezier
        },
        '--TechniquesBorderWidth': {
            from: '0%',
            to: '100%',
            timing: bezier
        },
        '--TechniquesDividerHeight': {
            from: '0%',
            to: '70%',
            timing: bezier
        }
    }
})
techniquesHeader.start()

let techniquesList = []
document.querySelectorAll('.techniques-listItem').forEach((elem, i) => {
    techniquesList.push(basicScroll.create({
        elem: elem,
        from: 'middle-bottom',
        to: 'top-middle',
        direct: true,
        props: {
            '--TechniquePositionX': {
                from: '-2vw',
                to: '0',
                timing: bezier
            },
            '--TechniqueOpacity': {
                from: 0,
                to: 1,
                timing: bezier
            },
            '--TechniqueDotScale': {
                from: 0,
                to: 1,
                timing: bezier
            }
        }
    }))
})
techniquesList.forEach((technique) => technique.start())

let getInTouchList = []
document.querySelectorAll('.getInTouch-listItem').forEach((elem, i) => {
    getInTouchList.push(basicScroll.create({
        elem: elem,
        from: 'middle-bottom',
        to: 'top-middle',
        direct: true,
        props: {
            '--GetInTouchPositionX': {
                from: '-2vw',
                to: '0',
                timing: bezier
            },
            '--GetInTouchOpacity': {
                from: 0,
                to: 1,
                timing: bezier
            },
            '--GetInTouchDotScale': {
                from: 0,
                to: 1,
                timing: bezier
            }
        }
    }))
})
getInTouchList.forEach((getInTouch) => getInTouch.start())
