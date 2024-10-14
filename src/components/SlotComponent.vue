<template>
    <div>
        <header>
            <slot name="header"message="Hello Header"></slot>
        </header>
        <nav>Navigation</nav>
        <main>
            <slot message="Hello Main Content"></slot>
        </main>
        <footer>
            <slot name="footer" message="Hello Footer Content" count="1"></slot>
        </footer>
    </div>
</template>