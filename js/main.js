document.getElementById('100Meters').onclick = oneHundredMetersEvent
document.getElementById('longJump').onclick = longJumpEvent
document.getElementById('shotPut').onclick = shotPutEvent
document.getElementById('highJump').onclick = highJumpEvent
document.getElementById('400Meters').onclick = fourHundrededMetersEvent
document.getElementById('110MeterHurdles').onclick = oneHundredTenHurdlesEvent
document.getElementById('discus').onclick = discusEvent
document.getElementById('poleVault').onclick = poleVaultEvent
document.getElementById('javelin').onclick = javelinEvent
document.getElementById('1500MeterRun').onclick = fifteenHundredEvent

function oneHundredMetersEvent() {
    document.querySelector('section').style.backgroundImage = "url('css/decathlon_images/100-meters.jpg')"
}

function longJumpEvent() {
    document.querySelector('section').style.backgroundImage = "url('css/decathlon_images/long-jump-1.jpg')"
}

function shotPutEvent() {
    document.querySelector('section').style.backgroundImage = "url('css/decathlon_images/shot-put.jpg')"
    document.querySelector('section').style.backgroundSize = "contain"
}

function highJumpEvent() {
    document.querySelector('section').style.backgroundImage = "url('css/decathlon_images/high-jump.jpg')"
}

function fourHundrededMetersEvent() {
    document.querySelector('section').style.backgroundImage = "url('css/decathlon_images/400-meters.jpg')"
}

function oneHundredTenHurdlesEvent() {
    document.querySelector('section').style.backgroundImage = "url('css/decathlon_images/hurdles.jpg')"
}

function discusEvent() {
    document.querySelector('section').style.backgroundImage = "url('css/decathlon_images/discus.jpg')"
}

function poleVaultEvent() {
    document.querySelector('section').style.backgroundImage = "url('css/decathlon_images/pole-vault.jpg')"
}

function javelinEvent() {
    document.querySelector('section').style.backgroundImage = "url('css/decathlon_images/javelin.jpg')"
}

function fifteenHundredEvent() {
    document.querySelector('section').style.backgroundImage = "url('css/decathlon_images/1,500-meter-run.jpg')"
}