import React from 'react';
import { Newspaper, Calendar } from 'lucide-react';

const News = () => {
  return (
    <section className="pt-28 pb-24 bg-white dark:bg-gray-900 min-h-screen" data-testid="news-page">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            News
          </h1>
        </div>

        {/* News Items */}
        <div className="max-w-4xl mx-auto">
          {/* News Item 1 */}
          <article className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                <Newspaper className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="font-body flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">January 2026</span>
              </div>
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              TaraVera Bio formation
            </h2>
            
            <div className="font-body space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Neurodegenerative disease has too often been treated as an inevitable consequence of ageing, rather than a biological problem that can be understood — and changed.
              </p>
              <p>
                TaraVera Bio was founded on the belief that better outcomes will come not from louder promises, but from deeper science. With long experience inside the pharmaceutical system, we have seen where translation breaks down: when biology is averaged away, when patients are an afterthought, and when access is considered too late.
              </p>
              <p>
                We are building TaraVera Bio to focus on the mechanisms that truly drive disease progression, and to turn that understanding into medicines that are both effective and reachable. If we want to change the future of brain disease, we need to change how we discover, develop, and deliver therapies.
              </p>
            </div>
          </article>

          {/* Placeholder for future news items */}
          <div className="font-body text-center text-gray-500 dark:text-gray-500 py-12">
            <p className="italic">More news coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
