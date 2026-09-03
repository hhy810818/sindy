import os, pathlib
from playwright.sync_api import sync_playwright

OUT = pathlib.Path(__file__).parent / "img"; OUT.mkdir(parents=True, exist_ok=True)
NAMES = {
 "a1":"01_main_thumbnail_1000x1000",
 "a2":"02_hero",
 "a3":"03_problem",
 "a4":"04_cooling_structure",
 "a5":"05_zipper",
 "a6":"06_size",
 "a7":"07_carry",
 "a8":"08_use_cases",
 "a9":"09_colors",
 "a10":"10_spec",
 "a11":"11_caution",
}
proxy = os.environ.get("HTTPS_PROXY") or os.environ.get("https_proxy")
with sync_playwright() as p:
    kw = dict(executable_path='/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
              args=['--no-sandbox','--force-color-profile=srgb','--font-render-hinting=none'])
    if proxy: kw['proxy']={'server':proxy}
    b = p.chromium.launch(**kw)
    pg = b.new_page(viewport={'width':1100,'height':900}, device_scale_factor=2)
    pg.goto((pathlib.Path(__file__).parent / "_assets-source.html").as_uri())
    pg.wait_for_load_state("networkidle")
    pg.evaluate("document.fonts.ready")
    pg.wait_for_timeout(2500)
    for eid, name in NAMES.items():
        el = pg.locator("#"+eid)
        box = el.bounding_box()
        path = OUT / f"{name}.png"
        el.screenshot(path=str(path))
        print(f"{name}.png  {int(box['width'])}x{int(box['height'])} css  ->  {path.stat().st_size//1024} KB")
    b.close()
