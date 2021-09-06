import React from "react";

export function Article({ children }) {
  return (
    <article className="text-center article lg:w-full lg:py-4 lg:text-left">
      <div className="w-full max-w-6xl px-6 mx-auto">
        <div className="relative lg:flex">{children}</div>
      </div>
    </article>
  );
}

export function ArticleContent({ title, children }) {
  return (
    <div className="pb-16 pr-20 article--content pt-4 lg:pt-4">
      <div className="w-full max-w-3xl mx-auto">
        {title && <ArticleHeader>{title}</ArticleHeader>}
        {children && <ArticleBody>{children}</ArticleBody>}
      </div>
    </div>
  );
}

export function ArticleHeader({ children }) {
  return (
    <header>
      <ArticleTitle>{children}</ArticleTitle>
    </header>
  );
}

export function ArticleTitle({ children }) {
  return (
    <h1 className="mb-3 text-4xl font-bold lg:leading-tight text-primary-500 font-variant">
      {children}
    </h1>
  );
}

export function ArticleBody({ children }) {
  return <div className="mb-8 prose lg:prose md:px-16 lg:px-0">{children}</div>;
}

export function ArticleMedia({ children }) {
  return (
    <div className="relative my-20 article--media -right-10 lg:right-0 lg:py-0 lg:w-full">
      <span className="inline-flex">{children}</span>
    </div>
  );
}
