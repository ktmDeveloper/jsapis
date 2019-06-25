import React from 'react';

export default function intersectionObserver() {
    
    window.addEventListener('load', () => {
        const Observer = new IntersectionObserver(function (entries) {
            console.log(entries)
        })
    
        Observer.observe(document.getElementById('targetElem'));
    });

    return (
        <div>
            <h1>Intersection Observer</h1>
            <h5>
                <code>
                    IntersectionObserver
                </code>
            </h5>
            <h4>
                Scroll to the bottom
            </h4>

            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, veritatis et. Quasi deleniti magnam illo repudiandae ex! Eos corporis error distinctio, veritatis earum, aspernatur nihil voluptate autem dolore, saepe ipsum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequatur laborum quasi eos dolorem. Fugit distinctio reprehenderit voluptate sapiente voluptates! Facere illo quaerat quidem quia vero! Aut voluptatum omnis provident.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, perspiciatis voluptatem. Pariatur fugiat modi, ex dolor nam atque praesentium nemo cupiditate porro voluptas, recusandae, eos officia itaque voluptatibus. Quia, molestiae.
</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, veritatis et. Quasi deleniti magnam illo repudiandae ex! Eos corporis error distinctio, veritatis earum, aspernatur nihil voluptate autem dolore, saepe ipsum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequatur laborum quasi eos dolorem. Fugit distinctio reprehenderit voluptate sapiente voluptates! Facere illo quaerat quidem quia vero! Aut voluptatum omnis provident.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, perspiciatis voluptatem. Pariatur fugiat modi, ex dolor nam atque praesentium nemo cupiditate porro voluptas, recusandae, eos officia itaque voluptatibus. Quia, molestiae.
</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, veritatis et. Quasi deleniti magnam illo repudiandae ex! Eos corporis error distinctio, veritatis earum, aspernatur nihil voluptate autem dolore, saepe ipsum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequatur laborum quasi eos dolorem. Fugit distinctio reprehenderit voluptate sapiente voluptates! Facere illo quaerat quidem quia vero! Aut voluptatum omnis provident.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, perspiciatis voluptatem. Pariatur fugiat modi, ex dolor nam atque praesentium nemo cupiditate porro voluptas, recusandae, eos officia itaque voluptatibus. Quia, molestiae.
</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, veritatis et. Quasi deleniti magnam illo repudiandae ex! Eos corporis error distinctio, veritatis earum, aspernatur nihil voluptate autem dolore, saepe ipsum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequatur laborum quasi eos dolorem. Fugit distinctio reprehenderit voluptate sapiente voluptates! Facere illo quaerat quidem quia vero! Aut voluptatum omnis provident.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, perspiciatis voluptatem. Pariatur fugiat modi, ex dolor nam atque praesentium nemo cupiditate porro voluptas, recusandae, eos officia itaque voluptatibus. Quia, molestiae.
</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, veritatis et. Quasi deleniti magnam illo repudiandae ex! Eos corporis error distinctio, veritatis earum, aspernatur nihil voluptate autem dolore, saepe ipsum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequatur laborum quasi eos dolorem. Fugit distinctio reprehenderit voluptate sapiente voluptates! Facere illo quaerat quidem quia vero! Aut voluptatum omnis provident.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, perspiciatis voluptatem. Pariatur fugiat modi, ex dolor nam atque praesentium nemo cupiditate porro voluptas, recusandae, eos officia itaque voluptatibus. Quia, molestiae.
</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, veritatis et. Quasi deleniti magnam illo repudiandae ex! Eos corporis error distinctio, veritatis earum, aspernatur nihil voluptate autem dolore, saepe ipsum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequatur laborum quasi eos dolorem. Fugit distinctio reprehenderit voluptate sapiente voluptates! Facere illo quaerat quidem quia vero! Aut voluptatum omnis provident.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, perspiciatis voluptatem. Pariatur fugiat modi, ex dolor nam atque praesentium nemo cupiditate porro voluptas, recusandae, eos officia itaque voluptatibus. Quia, molestiae.
</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, veritatis et. Quasi deleniti magnam illo repudiandae ex! Eos corporis error distinctio, veritatis earum, aspernatur nihil voluptate autem dolore, saepe ipsum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequatur laborum quasi eos dolorem. Fugit distinctio reprehenderit voluptate sapiente voluptates! Facere illo quaerat quidem quia vero! Aut voluptatum omnis provident.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, perspiciatis voluptatem. Pariatur fugiat modi, ex dolor nam atque praesentium nemo cupiditate porro voluptas, recusandae, eos officia itaque voluptatibus. Quia, molestiae.
</p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, veritatis et. Quasi deleniti magnam illo repudiandae ex! Eos corporis error distinctio, veritatis earum, aspernatur nihil voluptate autem dolore, saepe ipsum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consequatur laborum quasi eos dolorem. Fugit distinctio reprehenderit voluptate sapiente voluptates! Facere illo quaerat quidem quia vero! Aut voluptatum omnis provident.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, perspiciatis voluptatem. Pariatur fugiat modi, ex dolor nam atque praesentium nemo cupiditate porro voluptas, recusandae, eos officia itaque voluptatibus. Quia, molestiae.
</p>

            </div>
            <div className="centerAndBox" id="targetElem">
                <p>Tadahh.</p>
                <p>Check the console for <code>IntersectionObserverEntry.isIntersecting</code></p>
                <p>I was loaded after you scrolled here.</p>
            </div>
        </div>
    )
}

