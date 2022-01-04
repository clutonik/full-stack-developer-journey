# import libraries
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
import time


LANDING_PAGE = 'https://www.ifdc.ca/'
PRODUCT_PAGE = 'https://www.ifdc.ca/product-page/'

PAGES = {
    'beds': 'shop-1',
    'bunk-beds': 'shop-2'
}

# execute script to scroll down the page
# driver.execute_script("window.scrollTo(0, document.body.scrollHeight);var lenOfPage=document.body.scrollHeight;return lenOfPage;")

def get_all_products(url):
    try:
        driver = webdriver.Firefox()
        driver.get(url)
        # driver.maximize_window()

        driver.execute_script("window.scrollTo(0, document.body.scrollHeight)")
        SCROLL_PAUSE_TIME = 0.5

        # Get current URL from driver
        current_url = driver.current_url

        n = 1
        while True:
            # Beds only have 5 pages
            if n > 5:
                break
            
            # Initialize the new URL by adding ?page=n to the current URL
            new_url = current_url + f'?page={n+1}'
            try:
                driver.get(new_url)
            except Exception as e:
                print(e)
                break

            n = n + 1

            # Wait to load page
            time.sleep(SCROLL_PAUSE_TIME)

        # get all products from list
        results = driver.find_element(by = 'xpath', value = '/html/body/div[1]/div/div[3]/div/main/div/div/div/div[2]/div/div/div/div[2]/div/div/div/div/section/div/ul')

        # get product codes from response text
        product_codes = [ result for result in results.text.split('\n') if result.startswith('IF-') and len(result.split()) == 1 ]

        # Few products have Whitespaces in their code, trim them
        derived_product_codes_after_trimming = [ result.split()[0] for result in product_codes if len(result.split()) != 1 ]

        # return all product codes
        return product_codes + derived_product_codes_after_trimming
    except Exception as e:
        driver.quit()
        raise
    finally:
        driver.quit()

def get_product_info(url):
    driver = webdriver.Firefox()
    try:
        driver.get(url)
        results = driver.find_element(by = 'xpath', value = '/html/body/div/div/div[3]/div/main/div/div/div/div[2]/div/div/div/div/div/div/article/div[1]/section[2]')
        image = driver.find_element(by='xpath', value='//*[@id="get-image-item-id"]')
        results_list = results.text.split('\n')

        product = {
                'code': results_list[0],
                'dimensions': results_list[2],
                'description': results_list[5],
                'image': image.get_attribute('href')
            }
        return product
    except Exception as e:
        driver.quit()
        raise
    finally:
        driver.quit()


if __name__ == '__main__':
    # Get all products
    beds = get_all_products(LANDING_PAGE+PAGES['beds'])

    # initialize products list to store info for all products
    products = []

    # loop through all products and add them to the products list
    # TODO: once we get information for a product, store it in a database
    # TODO: Update info for a product only it does not match the database
    for bed in beds:
        if bed == 'IF-5720':
            bed = 'IF-5720-1'
        products.append(get_product_info(PRODUCT_PAGE+bed.lower()))

    # # TODO: Get Product price from pdf price list and add it to product info
    print(products)
    # print(json.dumps(product_info, indent=2))
    