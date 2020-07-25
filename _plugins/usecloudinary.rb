Jekyll::Hooks.register [:pages, :documents], :post_render do |doc|
  # レンダリング後に実行

  out = doc.output
  if ENV["JEKYLL_ENV"] == "production" #本番環境の場合
    # 幅設定がないcloudinaryパス
    src = '\& src="https://res.cloudinary.com/nztm/image/fetch/c_fit,q_auto,f_auto/\1"'
    # 幅設定があるcloudinaryパス
    srcw = 'src="https://res.cloudinary.com/nztm/image/fetch/w_\2,c_fit,q_auto,f_auto,dpr_2/\1" \&'

    # data-srcをもとにパス設定
    out.gsub!(/data-src=[\"|\'](.*?)[\"|\']/, src)
    out.gsub!(/data-src=[\"|\'](.*?)[\"|\'].*data-width=[\"|\'](.*?)[\"|\']/, srcw)
  else #本番環境ではない場合
    src = '\& src="\1"'
    out.gsub!(/data-src=[\"|\'](.*?)[\"|\']/, src)
  end
  puts "#{doc.data["title"]}の画像パスを設定しました"
  doc.output = out
end
