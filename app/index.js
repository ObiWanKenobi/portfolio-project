// Load application styles
import 'styles/index.scss'
import * as basicScroll from 'basicscroll'

const resumeBox = basicScroll.create({
    elem: document.querySelector('.patternPanel'),
    from: 'top-bottom',
    to: 'bottom-top',
    props: {
        '--positionY': {
            from: '10%',
            to: '-150%'
        }
    }
})

resumeBox.start()
