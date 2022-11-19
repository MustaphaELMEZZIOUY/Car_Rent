import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import type { GetStaticProps, GetStaticPaths } from 'next'
import type { ParsedUrlQuery } from 'querystring'
import styles from '../../styles/Home.module.css'
// import { QParams } from '../../constant/interfaces/itemSlug'
import { QParams } from '../../constant/interfaces'
import { ItemDetails } from '../../components/ItemDetails'
import { ItemRelation } from '../../components/ItemRelation'

const Slug = ({slug}: QParams) => {
    /**
     * instead of just slug you have to pass more than that (images, description ...)
     * of course that is gonna come from getStaticProps
     */
    // const router = useRouter()
    // const { slug } = router.query
    // console.log(router)

    return (
        <main className={styles.main}>
            <ItemDetails slug={slug} />
            <ItemRelation />
        </main>

    )
}

const getStaticProps: GetStaticProps<QParams> = async ctx => {
    // const res = await fetch('https://.../posts')
    // const posts = await res.json()
    const slug = ctx.params as QParams

    return {
        props: slug,
        revalidate: 10, // In seconds
    }
}

const getStaticPaths: GetStaticPaths = async () => {
    // const res = await fetch('https://.../posts')
    // const posts = await res.json()

    const params = [
        {
            id: "12"
        }
    ]

    const slugs = params.map((param) => ({
        params: { slug: param.id },
    }))

    return {
        paths: slugs,
        fallback: 'blocking'
    }
}

export {getStaticProps, getStaticPaths}

export default Slug
