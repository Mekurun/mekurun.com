Jekyll::Hooks.register [:pages, :documents], :pre_render do |doc|
  # レンダリング直前に実行
  out = doc.content
  articles = %w(tips projects news) # このカテゴリのpostsだけ当てはまる
  category = doc.data['category']
  if articles.include?(category)
    path = doc.data['slug']
    out.gsub!(/!\[([^\[\]]*)\]\(([^\[\]]*)\)/, '![\1](/assets/article/'+"#{category}/#{path}"+'/\2)') # ![]()形式のもののパスを置き換える
    puts "#{category}の記事「#{doc.data['title']}」の画像パスを置き換えました✅"
  end
  doc.content = out
end
