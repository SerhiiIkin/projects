import StickersApi from "./StickersApi.js";

const $container = $(".container");
const $htmlStick = $("#stickHTML").html();
const $addBtn = $(".btn__add");

$addBtn.on("click", onAddBtnClick);
$container.on("click", ".btn__close", onBtnCloseClick);
$container.on("focusout", ".stick__text", onTextAreaFocusout);

showStickers();

function onAddBtnClick() {
    let stick = { text: "" };
    let $html = stickHtml(stick);
    $($html).appendTo($container);

    StickersApi.createStick(stick).then(setIdToNewStick).catch(handleError);
}

function onBtnCloseClick(e) {
    const stick = getStick(e.target);
    const id = getIdLocal(stick);

    StickersApi.deleteStick(id).then(stick.remove()).catch(handleError);
}

function onTextAreaFocusout(e) {
    const stick = getStick(e.target);
    const id = getIdLocal(stick);
    const stickTextArea = e.target.value;
    const updatedStick = { text: stickTextArea };

    StickersApi.updateStick(id, updatedStick).catch(handleError);
}

function setIdToNewStick(stickers) {
    let newStick = $(".stick").last();
    newStick.attr("data-id", stickers.id);
}

function getStick(target) {
    return target.closest(".stick");
}

function getIdLocal(stick) {
    return stick.dataset.id;
}

function showStickers() {
    StickersApi.stickers().then(showStickersHtml).catch(handleError);
}

function showStickersHtml(stickers) {
    stickers.map((stick) => {
        let $html = stickHtml(stick);

        $($html).appendTo($container);
    });
}

function stickHtml(stick) {
    return $htmlStick
        .replace("{{text}}", stick.text)
        .replace("{{id}}", stick.id);
}

function handleError(e) {
    console.log(e.message);
}
