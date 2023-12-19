<template>
    <footer>
        <div>
            <div class="footer-content">
                <p>&copy; 2023 Todo App</p>
                <div class="footer-links">
                    <NuxtLink to="privacy-policy">Privacy Policy</NuxtLink>
                    <NuxtLink to="terms-of-service">Terms of Service</NuxtLink>
                    <NuxtLink to="contact-us">Contact Us</NuxtLink>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss">
footer {
    background-color: #f1f1f1;
    padding: 25px;

    div {
        max-width: 1100px;
        margin: 0 auto;

        .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 24px;

            @media screen and (max-width: 800px) {
                flex-direction: column;

                p {
                    order: 2;
                }

                .footer-links {
                    flex-direction: column;
                }
            }

            p {
                margin: 0;
                font-size: 0.9rem;
                color: #444;
            }

            .footer-links {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: 8px;
                margin: 0;
                padding: 0;

                a {
                    font-size: 0.9rem;
                    color: #666;
                    text-decoration: none;
                    transition: color 100ms ease;

                    &:hover {
                        color: #FC6E51;
                    }
                }
            }
        }
    }
}
</style>
